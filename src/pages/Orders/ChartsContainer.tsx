import useMediaQuery from '@mui/material/useMediaQuery';
import 'chart.js/auto';
import { Variants, motion } from 'framer-motion';
import { KitchenlyChart } from '@/components/ui/Charts/Chart';
import { chartColors, getDummyDataForChart } from '@/components/ui/Charts/Data';

const demoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '1em',
  },
  animate: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
    },
  },
};

export function ChartsContainer() {
  const isTabletOrMobile = useMediaQuery('(max-width:1224px)');

  return (
    <motion.div
      id="main-chart"
      className="hide-scrollbar"
      initial="hidden"
      animate="animate"
      variants={demoVariants}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2.5em',
        width: '100%',
        padding: '1em',
        justifyContent: 'flex-start',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <motion.div variants={demoVariants}>
        <KitchenlyChart
          aspectRatio={1920 / 1200}
          subtitleColor={chartColors.yellow.stroke}
          data={getDummyDataForChart('yellow').data}
          options={getDummyDataForChart('yellow').options}
          width={isTabletOrMobile ? '20em' : '24em'}
          subtitle="252"
          title="Open Orders"
        />
      </motion.div>
      <motion.div variants={demoVariants}>
        <KitchenlyChart
          aspectRatio={1920 / 1200}
          subtitleColor={chartColors.blue.stroke}
          data={getDummyDataForChart('blue').data}
          options={getDummyDataForChart('blue').options}
          width={isTabletOrMobile ? '20em' : '24em'}
          subtitle="121"
          title="Overdue orders"
        />
      </motion.div>

      <motion.div variants={demoVariants}>
        <KitchenlyChart
          aspectRatio={1920 / 1200}
          subtitleColor={chartColors.red.stroke}
          data={getDummyDataForChart('red').data}
          options={getDummyDataForChart('red').options}
          width={isTabletOrMobile ? '20em' : '24em'}
          subtitle="25"
          title="Canceled Orders"
        />
      </motion.div>
      <motion.div variants={demoVariants}>
        <KitchenlyChart
          aspectRatio={1920 / 1200}
          subtitleColor={chartColors.green.stroke}
          data={getDummyDataForChart('green').data}
          options={getDummyDataForChart('green').options}
          width={isTabletOrMobile ? '20em' : '24em'}
          subtitle="1025"
          title="Orders Delivered"
        />
      </motion.div>
    </motion.div>
  );
}
