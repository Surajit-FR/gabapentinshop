import React from 'react'

const Baclofen_section = () => {
  return (
    <div>
        <div className="about-layout2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5">
                        <div className="tile_gallery">
                            <img src={require("../../assets/product/backlofen1.jpg")} alt='pic'/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="about-Text">
                            <h2>Baclofen</h2>
                            <p className="mb-30">Baclofen is mainly used to treat pain in muscles. Muscle pain along with stiffness with multiple Sclerosis. It further helps in the treatment of spasms and spinal cord disease. Baclofen is an antispasmodic agent and works as a muscle relaxer in patients.</p>
                            <p className="mb-30">Baclofen can be taken with or without food orally or as mentioned by the doctor. The drug should not be taken more than 3 times a day. The dosage can be increased or decreased as per requirement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Baclofen_section
