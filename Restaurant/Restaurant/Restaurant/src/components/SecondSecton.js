import React from 'react';
import './SecondSection.css'; // Assuming you have a CSS file named SecondSection.css
import photo from './Images/second-section.jpg'

function SecondSection() {
    return (
        <div className="second-section">
            <div className="second-section__content">
                <h3>Our Story</h3>
                <h1>Welcome To Royal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, modi repudiandae explicabo voluptatum, non aspernatur magnam quidem, enim hic consequatur itaque eligendi dolor impedit dignissimos pariatur exercitationem expedita maiores dicta quas reiciendis saepe labore sit officia inventore? At iure labore asperiores sapiente, officiis deserunt dolores eum dolore, alias animi dignissimos amet hic voluptates autem in sit ea facilis. Sit neque pariatur quibusdam nam veritatis hic in, expedita asperiores, aut est labore, accusantium incidunt voluptates tempore commodi quos voluptatum tenetur? Tempora sint vel harum iusto. Necessitatibus aspernatur obcaecati eveniet vel possimus numquam atque exercitationem laudantium. Animi nisi possimus aperiam veritatis beatae sit, delectus corporis ratione sed! In magni consectetur, at tenetur laudantium necessitatibus error quam nihil quos provident, maiores, sequi optio reprehenderit explicabo quia! Omnis voluptas ipsa error ullam saepe placeat quam delectus. Voluptatum, blanditiis facere. Quisquam, odio! Temporibus repudiandae quas reiciendis adipisci quibusdam! Ullam ipsa dignissimos sint, rerum eos vitae veritatis beatae accusamus recusandae quis id, velit quidem excepturi nesciunt error earum consequatur neque voluptate iure cumque laborum numquam molestiae officiis. Repudiandae eveniet accusantium nostrum laboriosam veritatis illo labore quo quisquam, eaque ea molestiae nobis facere ab tenetur nisi! Maiores et dolore quia perspiciatis itaque reiciendis quas? Repellendus, fuga aliquid.</p>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi saepe, fugiat numquam provident error repudiandae commodi at vel accusamus facilis ratione voluptas nostrum cupiditate delectus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsam ullam obcaecati! Similique quasi dignissimos voluptatibus qui numquam, doloribus accusantium, quisquam architecto sed fuga aliquam.</p>
            </div>
            <img src={photo} alt="Description" className="second-section__photo" />
        </div>
    );
}

export default SecondSection;