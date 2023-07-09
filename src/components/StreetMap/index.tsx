import { useMemo } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import bbox from 'geojson-bbox';
import type { LeafletMouseEvent } from 'leaflet';
import { MapContainer, TileLayer, ZoomControl, GeoJSON } from 'react-leaflet';

import { useModal } from '@/hooks';
import { getGeometriaBairros } from '@/services/bairros';

export function StreetMap() {
  const { showModal, hideModal } = useModal();

  const geometriaBairros = useMemo(getGeometriaBairros, []);

  const extent = useMemo(() => bbox(geometriaBairros), [geometriaBairros]);

  function handleLayerClick({ sourceTarget }: LeafletMouseEvent) {
    const { properties } = sourceTarget.feature as GeoJSON.Feature;

    showModal('POPULATION_DRAWER', {
      show: true,
      bairro: properties,
      onClose: hideModal,
    });
  }

  return (
    <MapContainer
      id="street-map"
      bounds={[
        [extent[1], extent[0]],
        [extent[3], extent[2]],
      ]}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        data={geometriaBairros}
        eventHandlers={{ click: handleLayerClick }}
      />

      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}
