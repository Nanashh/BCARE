var raisedlist=[
    
];

raisedlist = JSON.parse(localStorage.getItem("raiselist"));
if(raisedlist==null){
    raisedlist=[{
        penggalang: "Jane Doe Foundation",
        type:"orangtua",
        ktpno:"02313313313132",
        ktpimg:"",
        hpno:"0231313133213",
        rektype:"BCA",
        rekno:"00000000231313",
        addresspenggalang: "Jl Capybara12345, DKI Jakarta",
        penerima:"John Doe",
        estimasi:"Rp12.000.000",
        time: "120",
        img:"./raisedphotos/1.png",
        title:"Bantu John Doe bangkit dari keterpurukan",
        raised:"Rp 12.000.000",
        desc:"John Doe merupakan ex veteran membutuhkan pertolongan untuk biaya kehidupan sehari-hari",
        status:"Finished",
        },
        {
        penggalang: "Jane Doe Foundation",
        type:"medis",
        ktpno:"02313313313132",
        ktpimg:"",
        hpno:"0231313133213",
        rektype:"BCA",
        rekno:"00000000231313",
        addresspenggalang: "Jl Capybara12345, DKI Jakarta",
        penerima:"Jona Doe",
        estimasi:"Rp100.000.000",
        time: "200",
        img:"./raisedphotos/2.png",
        title:"Bantu Jona Doe sembuh dari penyakit",
        raised:"Rp 2.000.000/100.000.000",
        desc:"Jona Doe membutuhkan operasi secepatnya, penyakitnya menyebar dengan cepat",
        status:"Active",
        },
        {
        penggalang: "Jane Doe Foundation",
        type:"bencana",
        ktpno:"02313313313132",
        ktpimg:"",
        hpno:"0231313133213",
        rektype:"BCA",
        rekno:"00000000231313",
        addresspenggalang: "Jl Capybara12345, DKI Jakarta",
        penerima:"Korban bencana",
        estimasi:"Rp500.000.000",
        time: "250",
        img:"./raisedphotos/3.png",
        title:"Bantu korban bencana gempa bumi",
        raised:"Rp 12.000.000/500.000.000",
        desc:"Gempa bumi melanda daerah xxxxxx, bantuan dibutuhkan segera kebutuhan bagi korban",
        status:"Active",
        },
         {
        penggalang: "Jane Doe Foundation",
        type:"orangtua",
        ktpno:"02313313313132",
        ktpimg:"",
        hpno:"0231313133213",
        rektype:"BCA",
        rekno:"00000000231313",
        addresspenggalang: "Jl Capybara12345, DKI Jakarta",
        penerima:"June Doe",
        estimasi:"Rp120.000.000",
        time: "70",
        img:"./raisedphotos/4.png",
        title:"Kakek June Doe perlu menyambung hidup",
        raised:"Rp -",
        desc:"Kakek June Doe yang sudah tua membutuhkan pertolongan untuk kelangsungan hidupnya",
        status:"Process",
        }
    ]
}

const sectioncenter=document.querySelector('.sectioncenter');

window.addEventListener('DOMContentLoaded',function(){
    let showraise=raisedlist.map(function(item){
return `<article class="raiseditem">
<img src=${item.img} class="photo" alt="">
<div class="iteminfo">
    <header>
    <h4>${item.title}</h4>
    <h5 class="collected">${item.raised}</h5>
    </header>
    <p class="itemtext">
      ${item.desc}  
    </p>
    <h5 class="marker">${item.status}</h5>
</div>
</article>`
    });
    showraise=showraise.join("");
    sectioncenter.innerHTML=showraise;
});

const addnewraise = (ev)=>{
    ev.preventDefault();
    const fileInput = document.getElementById('imgcondition');
  const inputfile = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    let inputraise = {
        penggalang: document.getElementById('namapenggalang').value,
        type: document.getElementById('typepenggalang').value,
        ktpno: document.getElementById('noktp').value,
        hpno: document.getElementById('nohp').value,
        ktpimg: document.getElementById('imgktp').value,
        rektype: document.getElementById('typerek').value,
        rekno: document.getElementById('norekening').value,
        addresspenggalang: document.getElementById('alamat').value,
        penerima: document.getElementById('namapenerima').value,
        title: document.getElementById('kondisi').value,
        estimasi: document.getElementById('estimated').value,
        time: document.getElementById('waktupenggalangan').value,
        desc: document.getElementById('desc').value,
        status: "Process",
        img: e.target.result,
        raised: "Rp -",
    }
    raisedlist.push(inputraise);
    document.forms[0].reset();

    localStorage.setItem('raiselist',JSON.stringify(raisedlist));
    location.reload();
    };
    reader.readAsDataURL(inputfile);
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('buttons').addEventListener('click',addnewraise);
});