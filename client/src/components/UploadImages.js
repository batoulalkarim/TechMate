import React from 'react'
import MultiImageInput from 'react-multiple-image-input'

function UploadImages({ images, setImages }) {


    
        const crop = {
          unit: "%",
          aspect: 4 / 3,
          width: "100"
        }

    return(
        <div>
            <h1>test</h1>
            <MultiImageInput
                max={4}
                width={350}
                height={350}
                theme="light"
                images={images}
                setImages={setImages}
                cropConfig={{ crop, ruleOfThirds: true }}
                />
        </div>
    )
}
export default UploadImages;
