'use client';

// 토이프로젝트 상세 페이지
// app/toyprojects/[id]/page.tsx

import React, { useRef, useEffect, use } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import { useRouter } from 'next/navigation';
import AeroCard from '@/components/Aero/AeroCard';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './page.module.scss';
import ChatWrapper from '@/components/wrapper/ChatWrapper';
import { toyProjects } from '@/data/toyprojects';
import { Chip, Tooltip } from '@nextui-org/react';
import ProjectScreenshotSlider from '@/components/element/ProjectScreenshotSlider';

type ToyProjectPageProps = {
  params: { id: string }; // 동적 경로에서 `id` 값
};

export default function ToyProjectPage({ params }: ToyProjectPageProps) {
  const { id } = React.use(params);
  const router = useRouter();
  const backgroundColors = ['var(--toyprojects-bg-color)'];
  const project = toyProjects.find((project) => project.id === Number(id));

  useEffect(() => {
    if (!project) {
      router.push('/toyprojects');
    }
  }, [project, router]);

  return project ? (
    <Provider store={store}>
      <BackgroundOverlay key={`project-${id}`} color={backgroundColors[0]} />
      <section className={styles.projectDetailSection}>
        <div className={styles.toyProjectCategory}>
          {/* 토이프로젝트 카테고리 */}
        </div>
        <div className={styles.projectDetailContainer}>
          {/* 프로젝트 상세 페이지 - 프로젝트 개요*/}
          <div className={styles.projectDetailContents}>
            <AeroCard className={styles.projectDetailCard}>
              {/* 프로젝트 상세 페이지 타이틀 */}
              <div className={styles.projectDetailTitle}>
                <h1>{project.name}</h1>
                {project.url && (
                  <a href={project.url} target='_blank' rel='noopener noreferrer'>
                    {`(${project.url})`}
                  </a>
                )}
                {!project.isDone && (
                  <div className={styles.projectIsDone}>
                    <Chip color="primary" variant="solid" size="sm">
                      {'In Progress'}
                    </Chip>
                  </div>
                )}
              </div>
              {/* 프로젝트 상세 페이지 목적 */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailPurpose}`}>
                <h2>Purpose</h2>
                <p>{project.purpose.join(', ')}</p>
              </div>


              {/* 프로젝트 상세 페이지 기간 */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailPeriod}`}>
                <h2>Period</h2>
                <p>{project.startDate} - {project.endDate}</p>
              </div>

              {/* 프로젝트 상세 페이지 기술 스택 */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailStack}`}>
                <h2>Stack</h2>
                <div className={styles.projectDetailStackList}>
                  {project.technologies?.map((technology) => (
                    <div className={styles.projectDetailStackItem} key={technology}>
                      <Tooltip
                        content={
                          <div className='px-1 py-2'>
                            <div className='text-lg font-bold'>{technology}</div>
                          </div>
                        }
                        showArrow
                        placement='top'
                        color='primary'
                      >
                        <img src={`/svgs/${technology}.svg`} alt={technology} width={40} height={40} />
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>

              {/* 프로젝트 상세 페이지 역할 */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailRole}`}>
                <h2>Role</h2>
                <ul>
                  {project.roles?.map((role) => (
                    <li><img src={`/icons/check_1.svg`} alt='role' width={20} height={20} />{role}</li>
                  ))}
                </ul>
              </div>

              {/* Github URL */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailGithub}`}>
                <h2>Github</h2>
                <div className={styles.projectDetailGithubList}>
                  {project.githubUrl?.map((githubUrl, index) => (
                    <div className={styles.projectDetailGithubItem} key={githubUrl}
                      onClick={() => window.open(githubUrl, '_blank')}
                    >
                      <Tooltip
                        content={
                          <div className='px-1 py-2'>
                            <div className='text-lg font-bold'>{githubUrl}</div>
                          </div>
                        }
                        showArrow
                        placement='top-start'
                        color='primary'
                      >
                        <img src={`/svgs/github${index + 1}.svg`} alt='github' width={35} height={35} />
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>

              {/* 프로젝트 상세 페이지 성과 */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailResult}`}>
                <h2>Result</h2>
                <ul>
                  {project.results?.map((result) => (
                    <li><img src={`/icons/checked.svg`} alt='result' width={20} height={20} />{result}</li>
                  ))}
                </ul>
              </div>

              {/* 프로젝트 상세 페이지 프로젝트 태그 */}
              <div className={`${styles.projectDetailItem} ${styles.projectDetailTag}`}>
                <h2>Tag</h2>
                <div className={styles.projectDetailTagList}>
                  {project.tags?.map((tag) => (
                    <Chip
                      className={styles.projectDetailTagItem}
                      key={tag.id}
                      variant="flat"
                      color={tag.color}
                    >
                      {tag.type}
                    </Chip>
                  ))}
                </div>
              </div>
            </AeroCard>
          </div>
          {/* 프로젝트 상세 페이지 - 프로젝트 스크린샷*/}
          <div className={styles.projectDetailScreenshots}>
            <AeroCard className={styles.projectDetailScreenshotCard}>
              {/* 프로젝트 상세 페이지 - 프로젝트 스크린샷 - 이미지가 있을 경우 */}
              {project.screenshots && project.screenshots.length > 0 && (
                <ProjectScreenshotSlider images={project.screenshots || []} />
              )}
              {/* 프로젝트 상세 페이지 - 프로젝트 스크린샷 - 이미지가 없을 경우 */}
              {!project.screenshots || project.screenshots.length === 0 && (
                <div className={styles.projectDetailScreenshotNoImage}>
                  <img src={`/icons/no-image.svg`} alt='no-image' width={20} height={20} />
                  <p>No screenshots available</p>
                </div>
              )}
            </AeroCard>
          </div>
        </div>

        {/* 프로젝트 상세 페이지 - 프로젝트 기술적 더 자세한 설명 */}
        <div className={styles.projectDetailMoreInfos}>
          <AeroCard className={styles.projectDetailMoreInfoCard}>
            {/* 프로젝트 상세 페이지 - 프로젝트 기술적 더 자세한 설명 - 프로젝트 목적 및 구현 방법 */}
            <div className={`${styles.projectDetailMoreInfoItem} ${styles.projectDetailMoreInfoWhatHow}`}>
              <h2>What & How</h2>
              {project.description.map((description, index) => (
                <div className={styles.projectDetailMoreInfoDetailItems} key={`project-description-${index}`}>
                  <img src={`/icons/correct.svg`} alt='description' width={20} height={20} />
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              ))}
            </div>

            {/* 프로젝트 상세 페이지 - 프로젝트 챌린지 */}
            <div className={`${styles.projectDetailMoreInfoItem} ${styles.projectDetailMoreInfoWhatHow}`}>
              <h2>Challenges</h2>
              {project.challenges.map((challenge, index) => (
                <div className={styles.projectDetailMoreInfoDetailItems} key={`project-challenge-${index}`}>
                  <img src={`/icons/question-mark.svg`} alt='challenge' width={20} height={20} />
                  <p dangerouslySetInnerHTML={{ __html: challenge }} />
                </div>
              ))}
            </div>

            {/* 프로젝트 상세 페이지 - 프로젝트 학습 포인트 */}
            <div className={`${styles.projectDetailMoreInfoItem} ${styles.projectDetailMoreInfoWhatHow}`}>
              <h2>Learning Points</h2>
              {project.learningPoints.map((learningPoint, index) => (
                <div className={styles.projectDetailMoreInfoDetailItems} key={`project-learningPoint-${index}`}>
                  <img src={`/icons/like.svg`} alt='learningPoint' width={20} height={20} />
                  <p dangerouslySetInnerHTML={{ __html: learningPoint }} />
                </div>
              ))}
            </div>
          </AeroCard>
        </div>

        {/* 프로젝트 상세 페이지 - 뒤로가기 */}
        <div className={styles.moreInfoArea}>
          <div className={styles.moreInfo}>
            <motion.div
              className={styles.moreButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push('/toyprojects')}
            >
              {'<< To List'}
            </motion.div>
          </div>
        </div>
        <ChatWrapper />
      </section>
    </Provider>
  ) : (
    <Provider store={store}>
      <BackgroundOverlay key={`project-${id}`} color={backgroundColors[0]} />
      <section className={styles.projectDetailSection}>
        <div className={styles.projectDetailContents}>
          <h1>Project not found</h1>
        </div>
      </section>
    </Provider>
  );
}