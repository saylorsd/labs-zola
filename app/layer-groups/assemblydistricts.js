import adminBoundaryStyles from '../utils/admin-boundary-styles';

const { paint, layout, labelLayout } = adminBoundaryStyles;

export default {
  id: 'assemblydistricts',
  title: 'NY State Assembly Districts',
  legendIcon: 'admin-line',
  legendColor: '#8A76F5',
  visible: false,
  layers: [
    {
      layer: {
        id: 'assemblydistricts-line-glow',
        type: 'line',
        source: 'admin-boundaries',
        'source-layer': 'ny-assembly-districts',
        paint: {
          'line-color': '#8A76F5',
          'line-opacity': 0.2,
          'line-width': {
            stops: [
              [11, 3],
              [16, 6],
            ],
          },
        },
      },
    },
    {
      layer: {
        id: 'assemblydistricts-line',
        type: 'line',
        source: 'admin-boundaries',
        'source-layer': 'ny-assembly-districts',
        paint: paint.lines,
        layout: layout.lines,
      },
    },
    {
      layer: {
        id: 'assemblydistricts-label',
        type: 'symbol',
        source: 'admin-boundaries',
        'source-layer': 'ny-assembly-districts',
        minzoom: 10,
        paint: paint.labels,
        layout: labelLayout('assemdist'),
      },
    },
  ],
};
