import { Bookmark } from "lucide-react";

const Card = ({ jobOpenings }) => {
  console.log(jobOpenings);

  return (
    <div className="card">
      <div className="top">
        <img src={jobOpenings.brandLogo} alt="" />
        <button>
          save <Bookmark />
        </button>
      </div>
      <div className="center">
        <h3>
          {jobOpenings.companyName} <span>{jobOpenings.datePosted}</span>
        </h3>
        <h2>{jobOpenings.post}</h2>
        <div className="tag">
          <h4>{jobOpenings.tag1}</h4>
          <h4>{jobOpenings.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{jobOpenings.post}</h3>
          <p>{jobOpenings.location}</p>
        </div>

        <button>Apply</button>
      </div>
    </div>
  );
};

export default Card;
