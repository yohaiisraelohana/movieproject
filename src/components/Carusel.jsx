//react imports
import React,{useState,useEffect} from 'react'
import axios from 'axios';
// style imports
import '../styles/carusel.css'

const Carusel = () => {
  const [slides,setBankMovie] = useState([]); 
  const [api_req , setApiReq] = useState('s=bank&apikey=d628e0b4');

  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?${api_req}`)
      .then(res=>setBankMovie(res.data.Search))
  },[api_req]);

      
      function useTilt(active) {
        const ref = React.useRef(null);
      
        React.useEffect(() => {
          if (!ref.current || !active) {
            return;
          }
      
          const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
          };
      
          let el = ref.current;
      
          const handleMouseMove = (e) => {
            if (!el) {
              return;
            }
            if (!state.rect) {
              state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;
      
            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
          };
      
          el.addEventListener("mousemove", handleMouseMove);
      
          return () => {
            el.removeEventListener("mousemove", handleMouseMove);
          };
        }, [active]);
      
        return ref;
      }
      
      const initialState = {
        slideIndex: 0
      };
      
      const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
          return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
          };
        }
        if (event.type === "PREV") {
          return {
            ...state,
            slideIndex:
              state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
          };
        }
      };
      
      function Slide({ slide, offset }) {
        const active = offset === 0 ? true : null;
        const ref = useTilt(active);
      
        return (
          <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
              "--offset": offset,
              "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
          >
            <div
              className="slideBackground"
              style={{
                backgroundImage: `url('${slide.Poster}')`
              }}
            />
            <div
              className="slideContent"
              style={{
                backgroundImage: `url('${slide.Poster}')`
              }}
            >
              <div className="slideContentInner">
                <h2 className="slideTitle">{slide.Title}</h2>
                <h3 className="slideSubtitle">{slide.movie}</h3>
                <p className="slideDescription">{slide.Year}</p>
              </div>
            </div>
          </div>
        );
        }
        const [state, dispatch] = React.useReducer(slidesReducer, initialState);
      
        return (
          <div className="html h-screen">
            <div className="body">
            <div className="slides">
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
      
            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i);
              return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
          </div>
            </div>
          </div>
        );
      
    }

export default Carusel