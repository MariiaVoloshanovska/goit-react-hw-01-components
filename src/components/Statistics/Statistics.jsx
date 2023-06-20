import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  // Генерація випадкового кольору
  const getRandomColor = () => {
    const colors = ['#FF7F50', '#87CEEB', '#FFD700', '#FF69B4', '#00FF7F'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  // Динамічна генерація стилів з випадковим кольором
  const getStatItemStyles = () => {
    const randomColor = getRandomColor();
    return {
      backgroundColor: randomColor,
    };
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((stat) => (
          <li key={stat.id} className={css.item} style={getStatItemStyles()}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};










// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className={css.statistics}>
//       {title && <h2 className={css.title}>{title}</h2>}
//       <ul className={css.statList}>
//         {stats.map(stat => (
//           <li key={stat.id} className={css.item}>
//             <span className={css.label}>{stat.label}</span>
//             <span className={css.percentage}>{stat.percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.array.isRequired,
// };