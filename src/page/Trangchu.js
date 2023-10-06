import LoaiSanPham from "./loai_san_pham";
import '../bootstrap-5.3.2-dist/css/bootstrap.min.css';
function Trangchu(){
  const dsLoaiSanPham=[
    {
      'ten':'Loại Sản Phẩm 1',
      'ds_san_pham':[
        {
          'hinh_anh':'./1.jpg',
          'ten':'sp 11',
          'gia':'1000',
        },
        {
          'hinh_anh':'./5.jpg',
          'ten':'sp 22',
          'gia':'1000',
        },
        {
          'hinh_anh':'./6.jpg',
          'ten':'sp 22',
          'gia':'1000',
        }
        
      ]
    },
    {
      'ten':'Loại Sản Phẩm 2',
      'ds_san_pham':[
        {
          'hinh_anh':'2.jpg',
          'ten':'sp 33',
          'gia':'1000',
        },
        {
          'hinh_anh':'3.jpg',
          'ten':'sp 33',
          'gia':'1000',
        },
        {
          'hinh_anh':'4.jpg',
          'ten':'sp 44',
          'gia':'1000',
        },
      ]
      
      
    }
  ];


  const listLoaiSanPham=dsLoaiSanPham.map(function(item){
    return(

      <LoaiSanPham data ={item}/>
    );
  });
  return(
    <>
    {listLoaiSanPham}
    </>
    
  )
  
};


export default Trangchu;