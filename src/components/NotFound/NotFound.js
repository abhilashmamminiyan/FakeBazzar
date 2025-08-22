import error from '../../assets/images/error.jpg';
function NotFound() {
    return ( 
        <>
        <div className='error'>
            <div>
                <img src={error} alt='404 Error'/></div>
            <div>
                Unfortunately the page you are looking for has been moved or deleted <br/>
            </div>
            <div>
            <a className='btn btn-primary' href='/'>GO TO HOMEPAGE</a>
            </div>
        </div>
        </>
     );
}

export default NotFound;