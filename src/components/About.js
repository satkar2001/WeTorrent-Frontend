import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const About = () => {
    return ( 
     <Tabs defaultActiveKey="facts">
         <Tab eventKey="facts" title="facts">
             <ol>
                 <li>WeTorrent is a torrent multisearch.we search other search engines for torrent links.</li>
                 <li>we link to other independent search engines that might host torrents</li>
                 <li>Created by Satkar Acharya </li>
             </ol>

         </Tab>
         <Tab eventKey="privacy" title="Privacy">
         <ol>
                 <li>We do not log data</li>
                 <li>We do not interfere with your internet privacy</li>
                 <li>We are not intrested in what you do online</li>

             </ol>
         </Tab>
         <Tab eventKey="takedown" title="Takedown">
             <ol>
                 <li>This is just a search/indexing tool,None of your content is hosted here .</li>
                 <li>We cannot takedown your content because we do not host it .You can redirect yourself to the actual source 
                     and request takedown.
                 </li>
                 <li>We have no strings attached to PIRACY!!! </li>
                
             </ol>
         </Tab>
     </Tabs>


     );
}
 
export default About;