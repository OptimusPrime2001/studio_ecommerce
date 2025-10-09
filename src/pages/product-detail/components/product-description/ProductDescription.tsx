'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription = ({ description }: ProductDescriptionProps) => {
  const [activeTab, setActiveTab] = useState('description');
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = [
    { id: 'description', label: 'Mô tả sản phẩm', icon: '📝' },
    { id: 'specifications', label: 'Thông số kỹ thuật', icon: '⚙️' },
    { id: 'warranty', label: 'Bảo hành & Đổi trả', icon: '🛡️' },
    { id: 'shipping', label: 'Vận chuyển', icon: '🚚' }
  ];

  const renderDescription = () => {
    return (
      <div 
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );
  };

  const renderSpecifications = () => {
    return (
      <div className={styles.specifications}>
        <div className={styles.spec_grid}>
          <div className={styles.spec_section}>
            <h4 className={styles.spec_title}>
              Thông số chính
            </h4>
            <div className={styles.spec_list}>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Độ phân giải:</span>
                <span className={styles.spec_value}>45.0 Megapixel</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Cảm biến:</span>
                <span className={styles.spec_value}>Full Frame CMOS</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>ISO:</span>
                <span className={styles.spec_value}>100-51200</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Tốc độ chụp:</span>
                <span className={styles.spec_value}>12 fps</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Màn hình:</span>
                <span className={styles.spec_value}>3.2" LCD cảm ứng</span>
              </div>
            </div>
          </div>
          
          <div className={styles.spec_section}>
            <h4 className={styles.spec_title}>
              Video & Kết nối
            </h4>
            <div className={styles.spec_list}>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Video:</span>
                <span className={styles.spec_value}>4K UHD 30fps</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Wi-Fi:</span>
                <span className={styles.spec_value}>802.11b/g/n</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Bluetooth:</span>
                <span className={styles.spec_value}>4.2 LE</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>USB:</span>
                <span className={styles.spec_value}>USB-C 3.2</span>
              </div>
              <div className={styles.spec_item}>
                <span className={styles.spec_label}>Pin:</span>
                <span className={styles.spec_value}>LP-E6NH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWarranty = () => {
    return (
      <div className={styles.warranty}>
        <div className={styles.warranty_section}>
          <h4 className={styles.warranty_title}>🛡️ Chính sách bảo hành</h4>
          <ul className={styles.warranty_list}>
            <li>Bảo hành chính hãng 24 tháng</li>
            <li>Bảo hành toàn cầu</li>
            <li>Hỗ trợ kỹ thuật 24/7</li>
            <li>Đổi mới trong 7 ngày đầu nếu có lỗi từ nhà sản xuất</li>
          </ul>
        </div>
        
        <div className={styles.warranty_section}>
          <h4 className={styles.warranty_title}>🔄 Chính sách đổi trả</h4>
          <ul className={styles.warranty_list}>
            <li>Đổi trả miễn phí trong 30 ngày</li>
            <li>Sản phẩm còn nguyên seal, chưa sử dụng</li>
            <li>Đầy đủ phụ kiện và hóa đơn mua hàng</li>
            <li>Hoàn tiền 100% nếu không hài lòng</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderShipping = () => {
    return (
      <div className={styles.shipping}>
        <div className={styles.shipping_section}>
          <h4 className={styles.shipping_title}>🚚 Thông tin vận chuyển</h4>
          <div className={styles.shipping_options}>
            <div className={styles.shipping_option}>
              <div className={styles.option_header}>
                <span className={styles.option_name}>Giao hàng tiêu chuẩn</span>
                <span className={styles.option_price}>Miễn phí</span>
              </div>
              <p className={styles.option_desc}>3-5 ngày làm việc</p>
            </div>
            
            <div className={styles.shipping_option}>
              <div className={styles.option_header}>
                <span className={styles.option_name}>Giao hàng nhanh</span>
                <span className={styles.option_price}>50.000đ</span>
              </div>
              <p className={styles.option_desc}>1-2 ngày làm việc</p>
            </div>
            
            <div className={styles.shipping_option}>
              <div className={styles.option_header}>
                <span className={styles.option_name}>Giao hàng siêu tốc</span>
                <span className={styles.option_price}>100.000đ</span>
              </div>
              <p className={styles.option_desc}>Trong ngày (Hà Nội, TP.HCM)</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return renderDescription();
      case 'specifications':
        return renderSpecifications();
      case 'warranty':
        return renderWarranty();
      case 'shipping':
        return renderShipping();
      default:
        return renderDescription();
    }
  };

  return (
    <div className={styles.product_desc}>
      {/* Tab Navigation */}
      <div className={styles.tab_nav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.tab_button} ${
              activeTab === tab.id ? styles.tab_active : ''
            }`}
          >
            <span className={styles.tab_icon}>{tab.icon}</span>
            <span className={styles.tab_label}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tab_content}>
        {renderTabContent()}
      </div>
    </div>
  );
};