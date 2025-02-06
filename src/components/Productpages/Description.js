import React from 'react'
import { useState, useEffect } from 'react';

const Description = () => {

  // Set the initial active tab index
  const [activeTab, setActiveTab] = useState(0);
  // Tab Titles
  const tabTitles = [
    {
      title: 'Description',
      id: 1
    }, 
    { title: 'Additional Information', 
      id: 2 
    }, 
    { title: 'Uses', 
      id: 3 
    }, 
    { title: 'Interactions', 
      id: 4 
    }, 
    { title: 'Side Effects', 
      id: 5 
    }];

  // Tab Content for each tab
  const tabContent = [
    {
      topcontent: 'Baclofen is mainly used to treat pain in muscles. Muscle pain along with stiffness with multiple Sclerosis. It further helps in the treatment of spasms and spinal cord disease. Baclofen is an antispasmodic agent and works as a muscle relaxer in patients.',
      bottomContent: "Baclofen can be taken with or without food orally or as mentioned by the doctor. The drug should not be taken more than 3 times a day. The dosage can be increased or decreased as per requirement."
    },
    {
      topcontent: 'Baclofen is mainly used to treat pain in muscles.',
      bottomContent: "bottomContent 2"
    },
    {
      topcontent: 'Baclofen is mainly used to treat pain in muscles.',
      bottomContent: "bottomContent 3"
    },
    {
      topcontent: 'Baclofen is mainly used to treat pain in muscles.',
      bottomContent: "bottomContent "
    },
    {
      topcontent: 'Baclofen is mainly used to treat pain in muscles.',
      bottomContent: "bottomContent 5"
    },
  ];
  // Function to change the active tab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };



  return (
    <div>
      <div className='description_scetion'>
        <div className='container'>
          <div className="row">
            <div className="col-md-12">

              <div className="tabs-container">
                <div className="tabs">
                  {tabTitles.map((title, index) => (
                    <button
                      key={title.id}
                      className={`tab ${activeTab === index ? 'active' : ''}`}
                      onClick={() => handleTabClick(index)}
                    >
                      {title.title}
                    </button>
                  ))}
                </div>
                <div className="tab-content">
                  <p>{tabContent[activeTab].topcontent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
