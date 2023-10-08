
import PropTypes from 'prop-types';

export default function AboutCard({ data }) {
    return (
        <div className="p-4 flex flex-col gap-2 self-stretch items-start rounded-lg border border-primary-200 bg-primary-100 hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-white leading-tight text-xl font-bold font-hl">{data.title}</h2>
            <p className="text-gray-400 text-base font-normal">{data.description}</p>
        </div>
    );
}

AboutCard.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
