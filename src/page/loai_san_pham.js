import SanPham from "./san_pham";
import '../bootstrap-5.3.2-dist/css/bootstrap.min.css';
function LoaiSanPham(props){
    const listSanPham=props.data.ds_san_pham.map(function(item){
    return (
        <SanPham data={item}/>
    );
});
return(
    <>
    <h1 className="ten-loai-san-pham">{props.data.ten}</h1>
    <div class="row">{listSanPham}</div>
    </>
)
    
}
export default LoaiSanPham;