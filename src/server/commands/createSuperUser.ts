import { createConnection } from "typeorm";
import * as options from "../ormconfigMySQL";
import { User } from "../users/entities/user.entity";
import { Role } from "../users/role.enum";
import * as readlineSync from "readline-sync";

console.log(process.argv.slice(2));

const [email] = process.argv.slice(2);

const insertUser = async () => {
    const connection = await createConnection({ ...options, entities: [User] });

    const repository = connection.getRepository(User);

    const user = repository.create();
    user.email = email || readlineSync.questionEMail("Enter E-Mail: ");

    user.passwordRaw = readlineSync.questionNewPassword("Enter password: ", { min: 8 });
    user.roles = [Role.Admin];

    await user.save();
    console.info("Super User has been created successfully!");
};

insertUser()
    .then()
    .catch(reason => console.error(reason))
    .finally(() => process.exit());
