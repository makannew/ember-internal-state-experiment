import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GetValueChildValueComponent extends Component {

  valueSource = "args"

  @tracked internalValue = this.args.value

  @action changeInternalValue(e){
    this.internalValue = e.target.value
    this.valueSource = "input"
  }

  get isParentValueChanged(){
    const foolEmberToTrigger = this.args.value
    this.valueSource = "args"
  }
  
  get value(){
    const foolEmberToTrigger = this.isParentValueChanged
    if (this.valueSource==="args"){
      return this.args.value
    }else{
      return this.internalValue
    }
  }

  @action submitChange(){
    if (this.valueSource==="input"){
      this.args.handleUpdate(this.internalValue)
    }
  }
  

}
