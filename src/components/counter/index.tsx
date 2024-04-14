import "./index.css"

const Counter = () => {
  return (
    <div className="wrapper-count">
      <div className="container-count">
        <i className="i-count fa-brands fa-html5"></i>
        <span className="num-count" data-val="365">
          5000+
        </span>
        <span className="text-count">Лайков</span>
      </div>

      <div className="container-count">
        <i className="i-count fa-brands fa-python"></i>
        <span className="num-count" data-val="290">
          7000+
        </span>
        <span className="text-count">Участников</span>
      </div>

      <div className="container-count">
        <i className="i-count fa-brands fa-node-js"></i>
        <span className="num-count" data-val="219">
          9000+
        </span>
        <span className="text-count">Постов</span>
      </div>

      <div className="container-count">
        <i className="i-count fa-brands fa-bootstrap"></i>
        <span className="num-count" data-val="140">
          1000+
        </span>
        <span className="text-count">Комментариев</span>
      </div>
    </div>
  )
}

export default Counter
