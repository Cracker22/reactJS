import Image from 'react-bootstrap/Image';

const ImageRender=(props)=>{
const {image}=props;
const imageStyle={
    "height":"17rem",
    "width":"100%"
}
return(<>
 <Image  style={imageStyle} className="mt-1 mx-1" src={image.download_url} alt={image.id} thumbnail />
</>)


}

export default ImageRender