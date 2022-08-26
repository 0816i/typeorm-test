import { EntityManager } from "typeorm";
import { AppDataSource } from "./data-source";
import { Category } from "./entity/Category";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    const category = new Category();
    category.categoryName = "test";

    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users[0]);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );

    // const manager = new EntityManager(AppDataSource);
    // const repository = manager.getRepository(User);

    // await repository.softRemove(user);

    // const afterUsers = await repository.find();
    // console.log(afterUsers);
  })
  .catch((error) => console.log(error));
