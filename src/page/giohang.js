function Giohang (){
    return(
        <>
        GIỎ HÀNG
                    <table class="table">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Thành tiền</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>10.000</td>
                <td>2</td>
                <td>20.000</td>
                <td>
                <button type="button" class="btn btn-danger"> DEL </button>
                <br></br>
                <button type="button" class="btn btn-success"> FIX </button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>10.000</td>
                <td>2</td>
                <td>20.000</td>
                <td>
                <button type="button" class="btn btn-danger"> DEL </button>
                <br></br>
                <button type="button" class="btn btn-success"> FIX </button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="1">Larry the Bird</td>
                <td>15.000</td>
                <td>4</td>
                <td>60.000</td>
                <td>
                <button type="button" class="btn btn-danger"> DEL </button>
                <br></br>
                <button type="button" class="btn btn-success"> FIX </button>
                </td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td colspan="1">Larry the Bird</td>
                <td>20.000</td>
                <td>6</td>
                <td>120.000</td>
                <td>
                <button type="button" class="btn btn-danger"> DEL </button>
                <br></br>
                <button type="button" class="btn btn-success"> FIX </button>
                </td>
                </tr>
            </tbody>
            </table>
        </>
    )
};
export default Giohang;