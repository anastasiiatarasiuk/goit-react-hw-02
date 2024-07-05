import s from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <div className={s.descrContainer}>
      <h1 className={s.descrTitle}>{title}</h1>
      <p className={s.descrText}>{description}</p>
    </div>
  );
};

export default Description;
