import {Address} from "@/Address";
import {ShoppingList} from "@/ShoppingList";

export class ExternalCustomer {
  constructor(public postalAddress: Address,
              public name: string,
              public preferredStore: string | null,
              public shoppingLists: ShoppingList[],
              public externalId: string,
              public companyNumber: string | null, 
              public bonusPointsBalance: number | null) {
  }

  isCompany() {
    return this.companyNumber !== null;
  }
}
