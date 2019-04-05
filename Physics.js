

constructor()
{
    this.canvas = {}
    this.initCanvas();
    this.boundRecursiveUpdate = this.update.bind(this);

}

initCanvas()
{
    this.canvas = document.getElementById("canvas");
    this.canvas.id = "canvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerWidth;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.init();
}

update()
{
    window.requestAnimationFrame(this.boundRecursiveUpdate);

}

render()
{
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

}