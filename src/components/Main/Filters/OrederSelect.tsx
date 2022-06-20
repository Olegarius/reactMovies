import React, { useCallback, useState } from "react";
import downImg from 'images/down.svg';
import { SORT_LIST, SORT_VALUES } from "const";
import * as Styled from './styles';

type Props = {
  orderBy: string;
  onChangeOrder: (newOrder: SORT_VALUES) => () => void;
}
const OrderSelect:React.FC<Props> = ({orderBy, onChangeOrder}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggleSelect = useCallback(() => setIsOpen(isOpen => !isOpen), [setIsOpen]);
  return (<Styled.OrderSelectWrapper onClick={onToggleSelect}>
    <Styled.SelectedOrderWrapper>
      {orderBy}
      <Styled.OrderSelectDownImg src={downImg} />
    </Styled.SelectedOrderWrapper>
    {isOpen && <Styled.OrderList>
      {SORT_LIST.map(item => (
        <Styled.OrderListItem key={item.value} onClick={onChangeOrder(item.value)}>{item.title}</Styled.OrderListItem>
      ))}
    </Styled.OrderList>}
  </Styled.OrderSelectWrapper>);
}

  export default OrderSelect;
