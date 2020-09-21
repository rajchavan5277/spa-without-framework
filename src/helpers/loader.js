export function loader(isActive = false) {
  if(isActive) {
    document.querySelector('.preloader-wrapper').className = 'preloader-wrapper big active'
  } else {
    document.querySelector('.preloader-wrapper').className = 'preloader-wrapper big'
  }   
}
  