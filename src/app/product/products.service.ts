import { Injectable } from '@angular/core';

import Product, { Category } from '../common/product.model';

@Injectable()
export class ProductsService {
  constructor() {}

  loadProduct(): Promise<Array<Product>> {
    const products = Array<Product>();
    products.push(
      new Product(
        'A Game of Thrones: Genesis',
        `
          A Game of Thrones: Genesis is a strategy video game developed by Cyanide and published by Focus Home Interactive
          released exclusively for Microsoft Windows on September 28, 2011 in North America (only on Steam),
          September 29, 2011 in Europe and October 13, 2011 in Australia.
          The game is an adaptation of the A Song of Ice and Fire book series by George R. R. Martin and is the first such
          video game adaptation. The game takes place over 1,000 years of the fictional history of Westeros,
          beginning with the arrival of the Rhoynar led by the warrior-queen Nymeria.
        `,
        15,
        true,
        Category.action
      )
    );
    products.push(
      new Product(
        'Call of Duty 2',
        `
          Call of Duty 2 is a 2005 first-person shooter video game developed by Infinity Ward and published
          by Konami in Japan and Activision in the rest of the world. It is the second
          installment of the Call of Duty series. Officially announced by Activision
          on April 7, 2005, the game was released on October 25, 2005, for
          Microsoft Windows and on November 22, 2005, as a launch game for the Xbox 360.
          Other versions were eventually released for OS X, mobile phones, and Pocket PCs.
        `,
        23,
        false,
        Category.fps
      )
    );

    products.push(
      new Product(
        'Counter-Strike',
        `
          Counter-Strike (CS) is a series of multiplayer first-person shooter video
          games, in which teams of terrorists battle to perpetrate an act of
          terror (bombing, hostage-taking) and counter-terrorists try to prevent it
          (bomb defusal, hostage rescue). The series began on Windows in 1999 with
          the first game, Counter-Strike. It was initially released as a modification
          ("mod") for Half-Life and designed by Minh "Gooseman" Le and Jess "Cliffe"
          Cliffe before the rights to the game's intellectual property were acquired by Valve Corporation, the developers of Half-Life.
        `,
        9,
        true,
        Category.fps
      )
    );

    products.push(
      new Product(
        'Assetto Corsa',
        `
          Assetto Corsa (Italian for "racing setup") is a sim racing video game
          developed by the Italian video game developer Kunos Simulazioni.
          It is designed with an emphasis on a realistic racing experience with
          support for extensive customization and moddability. The game was first
          released through the Steam Early Access program on 8 November 2013,
          and officially left Early Access as final release version on 19 December 2014.
        `,
        30,
        true,
        Category.racing
      )
    );

    products.push(
      new Product(
        'League of Legends',
        `
          League of Legends (abbreviated LoL) is a multiplayer online battle arena
          video game developed and published by Riot Games for Microsoft Windows
          and macOS. The game follows a freemium model and is supported by
          microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients.
        `,
        0,
        true,
        Category.moba
      )
    );

    const promise = new Promise<Array<Product>>((res, rej) => {
      res(products);
    });

    return promise;
  }
}
