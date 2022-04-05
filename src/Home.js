import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
        <div className='home_container'>
            <img className="home_image"
                src='https://imgs.search.brave.com/Vn50WBa9kIarNE9_-IlIikg71fJSMbct1rSK_eABJCI/rs:fit:1200:674:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMxNDQ4/OTcuanBn' alt="" />
                <div className="home_row">
                    <Product 
                      id="1"
                      title="The iphone the changer"
                      image='https://imgs.search.brave.com/5WKBgYcx-SQXanI3n3YxGlwmkDtlJUO_I46V6udGhho/rs:fit:1067:1200:1/g:ce/aHR0cHM6Ly93d3cu/YWNxdWlyZW1hZy5j/b20vLmltYWdlL3Rf/c2hhcmUvTVRjeE9E/YzVOems0TURBeU5E/STNOemcyL2FwcGxl/X25ldy1pcGhvbmUt/c2UtYmxhY2std2hp/dGUtcHJvZHVjdC1y/ZWQtY29sb3JzXzA0/MTUyMDIwLmpwZw'
                      price={280.99}
                      rating={5}
                    />
                    <Product
                      id="2"
                      title="must have an alt prop, either with meaningful text, or an empty string for decorative images"
                      image='https://imgs.search.brave.com/d-P_BqB7W2KpjUCTY4YVsBbaThNjSbeWe_x3ludz2y4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzZT/OWlEdjdRR1BLam14/M1lSUnRaQ1ouanBn'
                      price={2000.99}
                      rating={4}
                    />

                </div>

                 <div className="home_row">
                    <Product
                    id="3"
                     title="The mackBook pro"
                      image='https://imgs.search.brave.com/wiyDrfFhY8DYT0rbHtSW29Hibp0GYMxyQcxlao0AXQA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/Z2VuZXJhdGlvbi1u/dC5jb20vZ2FsYXh5/LXMyMi0xXzBGMDAw/OTYwMDE2NzM0MDUu/anBn'
                      price={2000.99}
                      rating={4}
                    />
                    <Product
                       id="4"
                       title="The mackBook pro"
                      image='https://imgs.search.brave.com/tVldv3E8fUq3TW3EpUQSgyGkQlJSo-xE9CptVK7QKEc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L2d2VE9S/YjZZNVJYY3I4ODRf/SWhJdGhEamZHMD0v/MTYwMHgwL2ZpbHRl/cnM6cXVhbGl0eSg5/MCkvYXJ0aWNsZS1u/ZXcvMjAyMS8wNi9p/cGhvbmUtMTMtZHVh/bi1ydWkyLmpwZWc'
                      price={2000.99}
                      rating={4}
                    />
                    <Product
                      id="5"
                     title="The mackBook pro"
                      image='https://imgs.search.brave.com/vt3CeC67AIKNKFXQebTS1-R7bpvyVIKEkBzhLuV39d0/rs:fit:1200:1000:1/g:ce/aHR0cDovL2J1eXRo/aXNvbmNlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/MS9MRy02NUVHOTYw/MC5qcGc'
                      price={2000.99}
                      rating={4}
                    />
                    
                </div>

                 <div className="home_row">
                    <Product
                      id="6"
                      title="The mackBook pro"
                      image='https://imgs.search.brave.com/QCIZdODSSppm-zAttCiOr44iw4xKp-giyLVPGhJ0sIE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xMG1l/am9yZXMubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAx/LzU4NjUwMDFfcmQu/anBn'
                      price={2000.99}
                      rating={4}
                    />
                    
                </div>
        </div>
    </div>
  )
}

export default Home