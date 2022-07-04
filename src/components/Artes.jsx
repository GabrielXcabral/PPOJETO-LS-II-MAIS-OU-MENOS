function Arte({ arte }) {
  return (
    <article>
      <div className="card">
        <img src={arte.image} 
        className="card-img-top" 
        alt="..." />
        <div className="card-body">
          <h5 className="card-title">{arte.name}</h5>
        </div>
        <a href="/endereco" id='btn' class="btn third">Comprar</a>
      </div>
    </article>
  );
}

export default Arte;
