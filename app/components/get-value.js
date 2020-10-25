import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';


export default class GetValueComponent extends Component {
  @tracked value = "parent initial value"

  @action changeValue(e){
    this.value = e.target.value
  }

  @action handleUpdate(newValue){
    this.value = newValue
  }

}
