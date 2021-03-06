import './creation-item.scss';
import { Creation } from 'data/common';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import Button from 'components/ui/Button';
import ShortText from 'components/helpers/ShortText';

interface Props {
    creation: Creation;
    left?: boolean;
}

export default function CreationLarge({ creation, left }: Props): JSX.Element {
    return (
        <div className="content-container">
            <div className="creation-item-large">
                <div className="row middle">
                    <div className={'column medium-6 large-7 ' + (left ? 'order-large-3' : '')}>
                        <div className="image" style={{ backgroundImage: 'url(' + creation.general.thumbnail + ')' }}>
                        </div>
                    </div>
                    <div className="column medium-6 large-5">
                        <div className="creation-content">
                            {
                                creation.general.tags.length > 0 && (
                                    <div className="tag-container">
                                        {
                                            creation.general.tags.map(t => (
                                                <Tag tag={t} key={t.id} />
                                            ))
                                        }
                                    </div>
                                )
                            }
                            <Heading heading={creation.general.name} size="small" />
                            <ShortText text={creation.general.description} length={100} />
                            <div className="button-container">
                                <Button route={'/creations/' + creation.general.slug}>
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}