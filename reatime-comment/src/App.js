import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h4>
            <strong>
              Realtime Comment system using Node Js, Express, Mongo DB,
              Socket.io and React
            </strong>
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4 className="border-bottom pb-2">Comments</h4>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label for="">Write a Comment</label>
            <textarea
              id="textarea"
              rows="3"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <button className="btn btn-primary float-right">Post Comment</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <ul className="comment__box">
            <li className="comment">
              <div className="card border-light mb-3">
                <div className="card-body">
                  <h6>Jahangir Aam</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
