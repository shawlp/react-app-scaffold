import React, {useEffect} from 'react';
import { Toast } from 'antd-mobile';

export default function ToastComponent() {
  useEffect(() => {
    Toast.loading('Loading...', 1);    
  });
  return <div></div>
}