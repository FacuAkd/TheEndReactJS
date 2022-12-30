import React from 'react';

const ItemListContainer = () => {
  return (
    <div class="container text-center espacio">
                <div class="row">
                    <div class="col">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-dark"><a class="nav-link active" aria-current="page" href="https://github.com/FacuAkd/ReactJs"target="_blank">GITHUB</a></li>
                        <li class="list-group-item list-group-item-info"><a class="nav-link active" aria-current="page" href="https://es-la.facebook.com/"target="_blank">FACEBOOK</a></li>
                        <li class="list-group-item list-group-item-danger"><a class="nav-link active" aria-current="page" href="https://www.instagram.com/"target="_blank">INSTAGRAM</a></li>
                        <li class="list-group-item list-group-item-primary"><a class="nav-link active" aria-current="page" href="https://twitter.com/?lang=es"target="_blank">TWITTER</a></li>
                    </ul>
                    </div>
                </div>
        </div>
  )
}

export default ItemListContainer
