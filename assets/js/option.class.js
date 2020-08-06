export class Opcion{
    constructor(nuevaOpcion){
        this.opcion = nuevaOpcion;
        this.id = new Date().getTime();
        this.color = seleccionColor();
    }
} 

const seleccionColor = () => {

    const colores = [
        '#FFCECE','#FFC8F2','#FFC8E3','#FFCAF9','#F5CAFF','#F0CBFE','#DDCEFF','#FFDFDF','#FFDFF8','#FFDFEF',
        '#FFDBFB','#F9D9FF','#F4DCFE','#E6DBFF','#CACAFF','#D0E6FF','#D9F3FF','#C0F7FE','#CEFFFD','#BEFEEB',
        '#CAFFD8','#E1E1FF','#DBEBFF','#ECFAFF','#C0F7FE','#E1FFFE','#BDFFEA','#EAFFEF','#F7F7CE','#FFF7B7',
        '#FFF1C6','#FFEAB7','#FFEAC4','#FFE1C6','#FFE2C8','#F9F9DD','#FFF9CE','#FFF5D7','#FFF2D2','#FFF2D9',
        '#FFEBD9','#FFE6D0','#FFC8C8','#F4CAD6','#FFA8FF','#EFCDF8','#C6C6FF','#C0E7F3','#DCEDEA','#FFEAEA',
        '#F8DAE2','#FFC4FF','#EFCDF8','#DBDBFF','#D8F0F8','#E7F3F1',
    ];
    
    let valorAleatorio = Math.floor(Math.random() * (0, (colores.length - 1)));
    let colorEnviar = colores[valorAleatorio];

    return colorEnviar;


}
