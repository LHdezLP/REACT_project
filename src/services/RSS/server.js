const express = require('express');
const RSS = require('rss');
const vehiclesService = require('./path-to/vehicles.service'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/rss', async (req, res) => {
  
  const feed = new RSS({
    title: 'Viajes Disponibles',
    description: 'Lista de viajes disponibles actualizada',
    feed_url: `${req.protocol}://${req.get('host')}/rss`,
    site_url: `${req.protocol}://${req.get('host')}`
  });

  try {
    
    const snapshot = await vehiclesService.getAllVehicles();
    const vehicles = [];
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      const data = childSnapshot.val();

      vehicles.push({
        key: key,
        driver: data.driver,
        type: data.type,
        info: data.info,
        sits: data.sits,
        date: data.date || new Date().toISOString() 
      });
    });

  
    vehicles.forEach(vehicle => {
      feed.item({
        title: `${vehicle.driver} va a visitarnos en un ${vehicle.type}`,
        description: vehicle.info,
        url: `${req.protocol}://${req.get('host')}/viajes/${vehicle.key}`, 
        date: vehicle.date
      });
    });

    
    res.set('Content-Type', 'application/rss+xml');
    res.send(feed.xml());
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    res.status(500).send('Error generating RSS feed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
