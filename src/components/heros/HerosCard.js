import './heroCard.scss';

export const HerosCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    console.log(id, superhero, publisher, alter_ego, first_appearance, characters);
    return (
        <div className="example-2 card">
            <div className="wrapper">
                <div className="header">
                    <div className="date">
                    <span className="day">12</span>
                    <span className="month">Aug</span>
                    <span className="year">2016</span>
                    </div>
                    <ul className="menu-content">
                    <li>
                        <a href="#" className="fa fa-bookmark-o" />
                    </li>
                    <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                    <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                    </ul>
                </div>
                <div className="data">
                    <div className="content">
                    <span className="author">Jane Doe</span>
                    <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                    <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" className="button">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
