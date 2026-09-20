
import image from '../../assets/images/healthy-unhealthy-food.webp'

function Food() {

  return(
    <div>
      <div className="food-container">
        <div className='food-card'>
          <h1>Food</h1>
          <h2>Healthy vs Unhealthy</h2>
          <img src={image} alt="healthy and unhealthy food picture" />
        </div>
        <article>
          The comparative analysis of healthy and unhealthy foods constitutes a central concern within contemporary nutritional science and public health discourse. Healthy foods, generally characterized by high nutrient density and minimal processing, supply essential micronutrients, dietary fiber, and phytochemicals that support physiological homeostasis and mitigate the risk of chronic diseases. Conversely, unhealthy foods, often defined by excessive added sugars, saturated fats, sodium, and artificial additives, tend to be energy-dense yet nutrient-poor, thereby contributing to metabolic dysregulation. Consequently, the distinction between these dietary categories is not merely gastronomic but profoundly consequential for individual and population health.
          <br /> <br />
          From a biochemical and epidemiological perspective, the consumption of healthy foods—such as vegetables, fruits, whole grains, legumes, and lean proteins—is associated with improved glycemic control, enhanced satiety, and reduced inflammation, collectively lowering the incidence of cardiovascular disease, type 2 diabetes, and certain malignancies. In contrast, unhealthy foods, particularly ultra-processed products, are frequently engineered for hyperpalatability and convenience, which can promote excessive caloric intake and addictive-like eating behaviors. Nevertheless, it is important to acknowledge that dietary choices are shaped by socioeconomic determinants, including income, education, and food accessibility, rather than solely by individual willpower. Thus, the comparison reveals both physiological and structural dimensions.
          <br /> <br />
          In conclusion, although unhealthy foods may offer immediate sensory gratification and practical convenience, their long-term consumption imposes deleterious effects on metabolic and cardiovascular health, whereas healthy foods provide sustainable nutritional benefits. A comprehensive approach to dietary improvement should therefore emphasize nutrition education, equitable access to wholesome foods, and regulatory measures that discourage the ubiquity of ultra-processed products. Ultimately, privileging nutrient-dense foods over their unhealthy counterparts constitutes a rational and evidence-based strategy for promoting long-term wellbeing.
        </article>
      </div>
    </div>
  )
}

export default Food;