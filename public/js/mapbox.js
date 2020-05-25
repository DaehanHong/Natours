/* eslint-disable */
export const displayMap = (locations) => {
    mapboxgl.accessToken = 
    'pk.eyJ1IjoiZ2hkZW9na3MiLCJhIjoiY2thOTNkZ2twMG5kMjMwb3p5bWFjeHhjOSJ9.uwl1rqfzG1G1Axy-mfzhKA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ghdeogks/cka93kkzf19561iqi9mtvp6fq',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 10,
        // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
            offset: 30
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right:100
        }
    });
}
