import React from 'react';

function RSSFeedPage() {
  
  return (
    <div>
      <h1>Feed RSS de Anuncios de Viajes</h1>
      <iframe
        title="Feed RSS"
        src="../../components/rss/rss.xml"
        width="100%"
        height="500px"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default RSSFeedPage;

