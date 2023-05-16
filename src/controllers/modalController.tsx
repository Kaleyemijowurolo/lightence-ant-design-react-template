import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, HEIGHT } from '@app/styles/themes/constants';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';

const ModalStyles = styled.div`
  .ant-modal-confirm-success &,
  .ant-modal-confirm-info &,
  .ant-modal-confirm-warning &,
  .ant-modal-confirm-error & {
    .ant-modal-content {
      background-color: var(--background-color);

      .ant-modal-confirm-title {
        color: var(--heading-color);
        font-size: ${FONT_SIZE.lg};
      }

      .ant-modal-confirm-content {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
      }

      .ant-modal-confirm-btns {
        .ant-btn.ant-btn-primary {
          font-size: ${FONT_SIZE.md};
          font-weight: ${FONT_WEIGHT.semibold};
          background-color: var(--ant-primary-color);
          border-color: var(--ant-primary-color);
          height: ${HEIGHT.md};
        }
      }
    }
  }
`;

const modalRender = (node: React.ReactNode) => <ModalStyles>{node}</ModalStyles>;

type ModalType = Pick<ModalStaticFunctions, 'info' | 'success' | 'warning' | 'error'>;

export const modalController = (modalType: ModalType): ModalType => ({
  info: (props) => modalType.info({ modalRender, ...props }),
  success: (props) => modalType.success({ modalRender, ...props }),
  warning: (props) => modalType.warning({ modalRender, ...props }),
  error: (props) => modalType.error({ modalRender, ...props }),
});
