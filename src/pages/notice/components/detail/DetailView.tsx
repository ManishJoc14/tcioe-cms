import { DetailSection } from '@/components/detail-section/types';
import { INoticeDetails } from '../../redux/types';
import { viewNoticeConfig } from './config';
import GenericDetailView from '@/components/detail-section';

interface IProps {
  noticeData: INoticeDetails | undefined;
  onClose: () => void;
}

const NoticeDetail: React.FC<IProps> = ({ noticeData, onClose }) => {
  if (!noticeData) return null;

  const sections: DetailSection<INoticeDetails>[] = [
    {
      type: 'dynamic-info',
      dynamicInfoProps: { ...viewNoticeConfig, data: noticeData }
    },
    {
      type: 'html',
      title: 'Description',
      html: noticeData.description || ''
    },
    {
      type: 'files',
      files:
        noticeData.medias?.map((media) => ({
          name: media.caption || 'File',
          url: media.file!,
          isPdf: media.mediaType === 'DOCUMENT' && media.file?.endsWith('.pdf')
        })) || []
    }
  ];

  return (
    <GenericDetailView
      title={noticeData.title || 'Notice'}
      avatar={noticeData.thumbnail}
      status={noticeData.isActive ? 'active' : 'inactive'}
      sections={sections}
      onClose={onClose}
    />
  );
};

export default NoticeDetail;
