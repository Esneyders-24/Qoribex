<script>
    const imagenes = [
        "Img/1.jpg",
        "Img/2.jpg",
        "Img/3.jpg",
        "Img/4.jpg"
    ];

    let index = 0;
    let img = document.getElementById("imgCarrusel");

    document.getElementById("btnPrev").onclick = () => {
        index = (index - 1 + imagenes.length) % imagenes.length;
        img.src = imagenes[index];
    };

    document.getElementById("btnNext").onclick = () => {
        index = (index + 1) % imagenes.length;
        img.src = imagenes[index];
    };
</script>
