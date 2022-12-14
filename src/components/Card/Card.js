import './Card.css';

const Card = ({img, name, job, margin}) =>{
    return (
        <div className={`col-4 box `+ margin} >
            <div className="d-flex justify-content-center">
                <div className='d-flex flex-column'>
                    <img className='img-fluid'src={img} alt={name}/>
                    <h3 className="fw-bold ">{name}</h3>
                </div>
                <div className='mt-1 pt-5'>
                    <p className='rotate text-uppercase fw-bold'>{job}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;