export default {
  id: 'co',
  title: 'Commercial Overlays',
  type: 'carto',
  sql: 'SELECT * FROM support_zoning_co',
  visible: true,
  layers: [
    {
      layer: {
        id: 'co',
        type: 'line',
        source: 'co',
        'source-layer': 'layer0',
        paint: {
          'line-width': {
            stops: [
              [13, 1],
              [14, 3],
            ],
          },
          'line-opacity': 0.3,
          'line-color': 'rgba(255, 0, 0, 1)',
        },
      },
    },
    {
      layer: {
        id: 'co_labels',
        source: 'co',
        type: 'symbol',
        'source-layer': 'layer0',
        paint: {
          'text-color': 'rgba(255, 0, 0, 1)',
          'text-halo-color': '#FFFFFF',
          'text-halo-width': 2,
          'text-halo-blur': 2,
          'text-opacity': 0.6,
        },
        layout: {
          'symbol-placement': 'point',
          'text-field': '{overlay}',
        },
        minzoom: 14,
      },
    },
  ],
};