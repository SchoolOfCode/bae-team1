import DonutChart from 'react-donut-chart';

// things I would never do:

export default function Donut({stats, colors}){
    return (
      <div>
    <DonutChart
    colors={colors}
    emptyColor = '#ffffff'
    innerRadius={0.4}
    outerRadius={0.7}
    interactive={false}
    strokeColor='#90D37F'
    legend={false}
    height={200}
    width={200}
    data={stats}
/>
{stats.map((stat, index) => <p style={{color: colors[index]}}>{`${stat.label} ${stat.value}kg`}</p>)}
<p>Yesterday, you used {stats.reduce((total, obj) => obj.value + total,0)}kg of carbon.</p>
</div>)
}