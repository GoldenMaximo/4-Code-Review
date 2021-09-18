import { Typography } from 'antd';
const { Title } = Typography;

import * as S from './styles';

/**
 * Illustration template to use as the sole component within WrapperLayout
 * Takes up the whole content container (white canvas) on WrapperLayout
 * @param {string} description - Text that will appear under the illustration.
 * @param {string} fileName - Name of the SVG file without the ".svg", must be located at public/illustrations.
 */
export const Illustration = ({
    description,
    fileName,
}: {
    description: string;
    fileName: string;
}) => {
    return (
        <S.IllustrationContainer>
            <S.EmptyIllustration src={`images/illustrations/${fileName}.svg`} />
            <Title level={3}>{description}</Title>
        </S.IllustrationContainer>
    );
};
