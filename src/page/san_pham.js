import '../bootstrap-5.3.2-dist/css/bootstrap.min.css';
import Giohang from './giohang';
function SanPham(props) {
    return (
        <div class="col-md-4" >
            <img src={props.data.hinh_anh}/>
            <p>{props.data.ten}</p>
            <Nalink to={<Giohang/>}>Chọn Mua</Nalink>
        </div>
       
    )
};
export default SanPham;