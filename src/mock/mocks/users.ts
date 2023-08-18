import { MY_PROFILE } from "../../app/constants/constants";
import { IDetailedUser } from "../../pages/User/model/types";
import { getRandomItemFromArr } from "../helpers";

export const mockUsers = [
  {
    id: 1,
    name: "Paxton Roberts",
    image:
      "https://media.gettyimages.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=gi&k=20&c=ELBLmT-KQ6vhI5xiWnQcWWw0QJiELKt6STlga4fwRC8=",
  },
  {
    id: 2,
    name: "Helen Smith",
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 3,
    name: "Gunner Nguyen",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
];

const addresses = [
  "2577 Lonely Oak Drive",
  "1804 Alfred Drive",
  "4769 Reppert Coal Road",
];

const genders = ["any", "some", "every"];

export const mockDetailedUsers: IDetailedUser[] = [
  ...mockUsers,
  MY_PROFILE,
].map((user, idx) => ({
  ...user,
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit fugiat illum tenetur culpa voluptates aliquid non ipsam accusantium. Laboriosam, quasi. Molestias neque aperiam obcaecati ad nisi architecto earum suscipit totam mollitia fugit illo, quisquam at voluptatibus ullam fuga eum delectus officia dolores consectetur facilis? Dolores deserunt ab, eligendi in porro corporis! Aspernatur fuga animi nisi in, eius officia possimus laudantium quas temporibus quos, nesciunt quasi pariatur provident! Illo repellendus placeat cumque quasi dolore natus repellat laboriosam, itaque, adipisci et ad? Voluptatibus, sit fugit, blanditiis eligendi impedit sint similique vel cupiditate suscipit quidem provident veritatis ipsa quibusdam architecto. Illo similique nobis adipisci, aut non eos, veritatis consectetur saepe officia consequuntur fuga ab. Quibusdam sit ad explicabo ut ex fuga rem fugit at soluta! Exercitationem minus laboriosam explicabo fugit sapiente corporis unde? Magnam nihil tenetur harum ea saepe fuga dolores, quis et libero debitis eum quisquam, accusamus rerum adipisci sit assumenda numquam! Quam cumque possimus ipsa ab at accusantium, inventore nulla sed, numquam consectetur voluptas nisi! Facilis illum omnis deserunt deleniti, iusto animi fugit illo impedit praesentium mollitia vitae maxime sed quibusdam ea explicabo quidem architecto aspernatur, sequi eos blanditiis, eligendi rem laudantium. Voluptatibus blanditiis unde voluptatum molestias sed asperiores alias quas ipsa, soluta esse ullam explicabo molestiae possimus voluptatem provident quasi itaque illo nobis autem quo ratione eius at magnam enim! Magnam quia ea accusantium repellendus laboriosam incidunt quae molestiae autem similique consequatur non, iste, porro corporis dolor molestias voluptatibus blanditiis quaerat eaque inventore placeat? Quaerat, quisquam libero. Dolores odio distinctio aspernatur quas corporis. Nam eveniet ex dolore inventore veniam maiores voluptatem nesciunt! Est tempore ex aspernatur vitae quas molestiae reprehenderit iusto saepe, asperiores vel sapiente quibusdam quos harum quam fuga sint autem at consequuntur repellat excepturi exercitationem. Eos recusandae veritatis delectus nihil, soluta accusantium dolores earum quam rem eum!",
  birthdate: `01.0${idx + 1}.${1990 + idx}`,
  address: getRandomItemFromArr(addresses),
  gender: getRandomItemFromArr(genders),
}));
